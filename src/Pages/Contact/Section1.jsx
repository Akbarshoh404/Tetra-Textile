import React from "react";
import "./Section1.scss";

const Section1 = () => {
  return (
    <>
      <div id="Home_secC1">
        <div className="mapDiv">
          <a
            href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            className="mapA"
          >
            Tashkent
          </a>
          <a
            href="https://yandex.com/maps/10335/tashkent/?display-text=tetra%20nb%20textile&from=mapframe&ll=69.243946%2C41.172403&mode=search&sctx=ZAAAAAgBEAAaKAoSCZC%2BSdOgT1FAETnQQ20blkRAEhIJKbAApgwccD8R%2BOKL9nghXT8iBgABAgMEBSgKOABAqwFIAWoCdXqdAc3MTD2gAQCoAQC9AX68KUPqAQDyAQD4AQCCAhB0ZXRyYSBuYiB0ZXh0aWxligIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.244064%2C41.172554&sspn=0.001966%2C0.000889&text=tetra%20nb%20textile&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.243906%2C41.172157&whatshere%5Bzoom%5D=17&z=19.97"
            className="mapA2"
          >
            41.172157,69.243906 — Yandex Maps
          </a>
          <iframe
            src="https://yandex.com/map-widget/v1/?display-text=tetra%20nb%20textile&from=mapframe&ll=69.243946%2C41.172403&mode=search&sctx=ZAAAAAgBEAAaKAoSCZC%2BSdOgT1FAETnQQ20blkRAEhIJKbAApgwccD8R%2BOKL9nghXT8iBgABAgMEBSgKOABAqwFIAWoCdXqdAc3MTD2gAQCoAQC9AX68KUPqAQDyAQD4AQCCAhB0ZXRyYSBuYiB0ZXh0aWxligIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.244064%2C41.172554&sspn=0.001966%2C0.000889&text=tetra%20nb%20textile&whatshere%5Bpoint%5D=69.243906%2C41.172157&whatshere%5Bzoom%5D=10&z=18.50"
            width="100%"
            height="500"
            frameborder="1"
            allowfullscreen="true"
            className="iframeMap"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Section1;
