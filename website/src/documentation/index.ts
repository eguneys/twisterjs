import type { Doc } from "../components/docs";
import { Anim_Docs } from "./anim";
import { Delay_Docs } from "./delay";
import { Graphics_Docs } from "./graphics";
import { Rect_Docs } from "./rect";
import { Steer_Docs } from "./steer";
import { Vec2_Docs } from "./vec2";

export const DOCS: Doc[] = [
    ...Vec2_Docs,
    ...Rect_Docs,
    ...Delay_Docs,
    ...Anim_Docs,
    ...Steer_Docs,
    ...Graphics_Docs
]