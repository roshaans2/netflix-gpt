import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

export const genai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });