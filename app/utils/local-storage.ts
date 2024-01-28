import { BagelScores, BagelComments } from "@/components/vote-form";

const BAGEL_SCORES_KEY = "BagelScores";
const BAGEL_COMMENTS_KEY = "BagelComments";

export function getLocalStorageScores(): BagelScores | null {
  if (typeof localStorage === "undefined") {
    return null;
  }
  return localStorage.getItem(BAGEL_SCORES_KEY)
    ? JSON.parse(localStorage.getItem(BAGEL_SCORES_KEY) || "null")
    : null;
}

export function setLocalStorageScores(scores: BagelScores) {
  if (typeof localStorage === "undefined") {
    return null;
  }
  localStorage.setItem(BAGEL_SCORES_KEY, JSON.stringify(scores));
}

export function getLocalStorageComments(): BagelComments | null {
  if (typeof localStorage === "undefined") {
    return null;
  }
  return localStorage.getItem(BAGEL_COMMENTS_KEY)
    ? JSON.parse(localStorage.getItem(BAGEL_COMMENTS_KEY) || "null")
    : null;
}

export function setLocalStorageComments(comments: BagelComments) {
  if (typeof localStorage === "undefined") {
    return null;
  }
  localStorage.setItem(BAGEL_COMMENTS_KEY, JSON.stringify(comments));
}
