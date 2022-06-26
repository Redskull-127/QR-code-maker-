/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from "../styles/Genrate.module.css";
import { Input } from "@chakra-ui/react";
import { BlockPicker } from "react-color";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { saveAs } from "file-saver";

export default function Genrate() {
  const [color, setColor] = useState("#000000");
  const [bgcolor, setBgcolor] = useState("#ffffff");
  const [value, setValue] = useState("");
  const [link, setLink] = useState("");
  const [height, setHeight] = useState("100");
  const [width, setWidth] = useState("100");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const onChangeWidth = (e) => {
    setWidth(e.target.value);
  };

  function genQR() {
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=${height}x${width}&data=${value}&amp;&color=${color}&bgcolor=${bgcolor}`;
    console.log(api);
    setLink(api);
  }

  const saveFile = () => {
    saveAs(link, "qr-qt.jpg");
  };

  return (
    <>
      <div className={styles.container} id="generate">
        <div className={styles.text}>
          <h1>
            Generate a new QR{" "}
            <i className="fa fa-qrcode" aria-hidden="true"></i>
          </h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.box}>
            <div className={styles.inputdiv}>
              <Input onChange={onChange} placeholder="Type here..." size="lg" />
              <Button onClick={genQR} colorScheme="whatsapp">
                Generate
              </Button>
            </div>
            <h1 style={{ fontSize: "20px" }}>Additional Options</h1>
            <div className={styles.options}>
              <div className={styles.size}>
                <h1>Size</h1>
                <div className={styles.sizeinput}>
                  <Input
                    onChange={onChangeHeight}
                    placeholder="100"
                    size="lg"
                  />
                  X
                  <Input
                    onChange={onChangeWidth}
                    placeholder="100"
                    size="lg"
                  />
                </div>
              </div>
              <div className={styles.option}>
                <h1>Set Color</h1>
                <BlockPicker
                  color={color}
                  onChange={(color) => {
                    setColor(color.hex.replace("#", ""));
                  }}
                />
              </div>
              <div className={styles.option}>
                <h1>Set Background Color</h1>
                <BlockPicker
                  color={bgcolor}
                  onChange={(color) => {
                    setBgcolor(color.hex.replace("#", ""));
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.box2}>
            {link != "" ? (
              <>
                <img src={link} onClick={saveFile} />
                <Button onClick={saveFile} colorScheme="whatsapp">
                  Download
                </Button>
              </>
            ) : (
              <h1>Click on Generate!</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
