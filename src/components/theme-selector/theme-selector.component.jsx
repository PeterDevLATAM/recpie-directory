import { useTheme } from "../../hooks/useTheme";

//styles
import "./theme-selector.styles.css";
import modeIcon from "../../assets/mode-icon.svg";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

export default function ThemeSelector() {
  const { mode, changeColor, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <div>
      <div className="theme-selector">
        <div className="mode-toggle">
          <img
            src={modeIcon}
            alt="mode toggle"
            onClick={toggleMode}
            style={{
              filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
            }}
          />
        </div>
        <div className="theme-buttons">
          {themeColors.map((color) => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{
                background: color,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
