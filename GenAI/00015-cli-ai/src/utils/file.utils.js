import fs from "fs/promises";
import path from "path";
import axios from "axios";

import { CONFIG_DIR } from "./constant.js";

export async function getSettingsFile() {
  try {
    await fs.access(CONFIG_DIR);
  } catch (err) {
    await fs.mkdir(CONFIG_DIR, { recursive: true });
  }

  const settingsFilePath = path.join(CONFIG_DIR, "settings.json");

  try {
    const content = await fs.readFile(settingsFilePath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(settingsFilePath, JSON.stringify({}));
      return {};
    }
    throw err;
  }
}


/**
 * Save API key in Settings
 */

export async function saveApiKey(apiKey) {
  const settingsFilePath = path.join(CONFIG_DIR, "settings.json");

  const settingsContent = await getSettingsFile();

  await fs.writeFile(settingsFilePath, JSON.stringify({ ...settingsContent, apiKey }));

}


/**
 * GET API key from Settings
 * 
 */

export async function getApiKey() {
    const settings = await getSettingsFile()
    const apiKey = settings.apiKey || null

    if (!apiKey) {
        return {
            error: "API key not found in settings file"
        }
    }

    try {
        await axios.get("https://api.groq.com/openai/v1/models", {
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        })

        return {
            apiKey
        }
    } catch (err) {
        const status = err.response?.status
        if (status === 401 || status === 403) {
            return {
                error: "Invalid API key"
            }
        }

        return {
            error: "Unable to validate API key"
        }
    }
}