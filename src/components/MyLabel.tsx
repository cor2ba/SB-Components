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
  fontColor?: string
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor 
}: Props) => {
  return <span className={`label ${size} text-${color}`} style={{color: fontColor}}>{ allCaps? label.toUpperCase() : label}</span>;
};

export default MyLabel