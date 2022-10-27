/// <reference types="react" />
import "./MyLabel.css";
export interface Props {
    /**
     * Este mensaje repesenta el label
     */
    label: string;
    /**
     * Esto cambiara su tamaño
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Cambiara el color
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * Encendido y apagado
     */
    allCaps: boolean;
    /**
     * Color de fuente
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: Props) => JSX.Element;
