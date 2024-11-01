import React from 'react';
import { BlenderProvider } from './BlenderContext';
// import PickerA from '../components/PickerA';
// import PickerB from '../components/PickerB';
// import StyleWrapper from '../components/StyleWrapper';
import ResultComp from '../components/ResultComp';
import GroupComp from '../components/GroupComp';
import { numberTree } from './numbersData';



const Blender = () => {

    // const styles = {
    //     border: '1px solid #ccc',
    //     padding: '10px',
    //     borderRadius: '8px',
    // };

    // const StyledPickerA = StyleWrapper(PickerA, styles);
    // const StyledPickerB = StyleWrapper(PickerB, styles);
    return (
        <BlenderProvider>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1>Блендер чисел</h1>
                <GroupComp node={numberTree} />
                <ResultComp />
            </div>
        </BlenderProvider>
    )
};

export default Blender;