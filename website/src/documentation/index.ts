import type { Doc } from "../components/docs";
import { Rect_Docs } from "./rect";
import { Vec2_Docs } from "./vec2";

export const DOCS: Doc[] = [
    ...Vec2_Docs,
    ...Rect_Docs
]