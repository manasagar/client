import React from "react";
export default function Alert(prop){
    return(
<div className="alert alert-primary" role="alert">
{prop.alert}
</div>
    )
}