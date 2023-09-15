import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";

const SliderThumbWithTooltip = ({...props}) => {

    return (
        <RangeSlider defaultValue={props.defaultValue} min={0} max={500000} step={10000}
            onChange={(v) => props.onSetRange(v)}
        >
            <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='red' />
            </RangeSliderTrack>
            <RangeSliderThumb
                boxSize={6} index={0}>
            </RangeSliderThumb>
            <RangeSliderThumb boxSize={6} index={1} />

        </RangeSlider>
    )
}
export default SliderThumbWithTooltip;