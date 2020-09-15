import React from "react";
import { NativeSelect } from "@material-ui/core";
//import InputLabel from '@material-ui/core/InputLabel';

const BidPicker = () => {
  return (
    <div>
      <NativeSelect defaultValue="">
        <option value="">Bid</option>
        ))}
      </NativeSelect>
      {"    "}
      <NativeSelect className="pickstyle2" defaultValue="">
        <option value="">Status</option>
        ))}
      </NativeSelect>
    </div>
  );
};

export default BidPicker;
