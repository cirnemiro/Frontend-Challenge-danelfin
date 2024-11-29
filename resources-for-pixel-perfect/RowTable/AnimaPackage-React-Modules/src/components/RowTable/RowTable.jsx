import React from "react";
import { DianaBuy1 } from "../../icons/DianaBuy1";
import { EightyOne } from "../../icons/EightyOne";
import { IcoCheckVerde } from "../../icons/IcoCheckVerde";
import { NinetyOne } from "../../icons/NinetyOne";
import { Property1Default } from "../../icons/Property1Default";
import { SeventyOne } from "../../icons/SeventyOne";
import { TwentyOne } from "../../icons/TwentyOne";
import * as classes from "./style.module.css";

export const RowTable = () => {
  return (
    <div className={classes["row-table"]}>
      <div className={classes.rank}>
        <div className={classes["tesla-inc"]}>10</div>
      </div>

      <div className={classes["ticker-and-name"]}>
        <div className={classes.frame}>
          <div className={classes["text-wrapper"]}>TSLA</div>

          <div className={classes.iconos}>
            <DianaBuy1 className={classes["diana-buy"]} />
            <IcoCheckVerde className={classes.check} />
          </div>
        </div>

        <p className={classes.div}>First Citizens Bancshares, Inc (NC)</p>
      </div>

      <div className={classes.country}>
        <div className={classes["flag-USA"]} />
      </div>

      <div className={classes["AI-score"]}>
        <NinetyOne className={classes.element} />
      </div>

      <div className={classes.change}>
        <div className={classes.group}>
          <div className={classes["text-wrapper-2"]}>1</div>

          <div className={classes["group-wrapper"]}>
            <img className={classes.img} alt="Group" src="/img/group-97.png" />
          </div>
        </div>
      </div>

      <div className={classes["element-wrapper"]}>
        <SeventyOne className={classes.element} />
      </div>

      <div className={classes["element-wrapper"]}>
        <NinetyOne className={classes.element} />
      </div>

      <div className={classes["element-wrapper"]}>
        <EightyOne className={classes.element} />
      </div>

      <div className={classes["low-risk"]}>
        <TwentyOne className={classes.element} />
      </div>

      <div className={classes["customizable-column"]}>
        <div className={classes["element-2"]}>58.76%</div>
      </div>

      <div className={classes["industry-sector"]}>
        <div className={classes["element-3"]}>Automobiles</div>
      </div>

      <div className={classes["add-to-portfolio"]}>
        <Property1Default className={classes["property-1-default"]} />
      </div>
    </div>
  );
};
