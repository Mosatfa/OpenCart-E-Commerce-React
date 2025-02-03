import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import { useState } from 'react';

interface IProps {
    onChange: (value: number[]) => void;
}

const Range = ({ onChange  }: IProps) => {
    const [rangeValues, setRangeValues] = useState([6000, 10000]); // Initial range values

    // Function to handle range slider changes
    const handleRangeChange = (newValues: number[]) => {
        setRangeValues(newValues); // Update local state
        onChange(newValues); // Call parent callback to update state or perform other actions
    };
    return (
        <RangeSlider aria-label={['min', 'max']} min={6000} max={10000} defaultValue={rangeValues} onChange={handleRangeChange}>
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
        </RangeSlider>
    )
}

export default Range