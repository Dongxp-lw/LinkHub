import { DefaultComponentProps } from "@/global";

export interface ComponentProps extends DefaultComponentProps {
    level: "1" | "2" | "3" | "4" | "5"
}