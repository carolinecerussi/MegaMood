import React from "react";
import TShirt from "./TShirt";
import {data} from "../data/index";

 function TShirtList()  {
      return (
        <div>
          {Object.values(data.tShirts).map(
            <TShirt />
          )}
        </div>
       );
      };

 export default TShirtList;