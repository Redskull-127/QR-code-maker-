/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from "../styles/Genrate.module.css";
import { Input } from "@chakra-ui/react";
import { BlockPicker } from "react-color";
import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { saveAs } from "file-saver";


export default function Genrate() {
  const [color, setColor] = useState("#000000");
  const [bgcolor, setBgcolor] = useState("#ffffff");
  const [value, setValue] = useState("");
  const [link, setLink] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  function genQR() {
    const api = `https://api.qrserver.com/v1/create-qr-code/?data=${value}&amp;size=100x100&color=${color}&bgcolor=${bgcolor}`;
    console.log(api);
    setLink(api);
  }

  const saveFile = () => {
    saveAs(
      link,
      "qr-qt.jpg"
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>
            Generate a new QR{" "}
            <i className="fa fa-qrcode" aria-hidden="true"></i>
          </h1>
        </div>
        <div className={styles.box}>
          <Input
            variant="filled"
            onChange={onChange}
            placeholder="Type here..."
            size="lg"
          />
          <h1>Additional Options</h1>
          <div className={styles.options}>
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
        <Button onClick={genQR} colorScheme='whatsapp'>Generate</Button>
        {link != "" ? 
            <img src={link} onClick={saveFile} />
         : null}
      </div>
    </>
  );
}
