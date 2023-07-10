import { DefaultComponentProps, ATarget } from "@/global";

export interface ComponentProps extends DefaultComponentProps {
    link: string,
    target?: ATarget,
}