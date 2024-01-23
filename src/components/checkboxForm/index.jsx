import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import "./style.css"

function FormikContainer (){
    const checkboxOptions = [
    {key: 'Boom Lift', value: 'cBoomLift'},
    {key: 'Scissors Lift', value: 'cScissorsLift'},
    {key: 'Tracked Spider Mount', value: 'cTrackedspidermount'},
    {key: 'Truck Mount Lift', value: 'cTruckmountLift'},
    {key: 'Not sure', value: 'cNotsure'}
    ]
    return(<>
    <fieldset class="group"> 
<legend>Fleet Options</legend> 
<ul class="checkbox"> 
{checkboxOptions.map(check=>{
        return(
            <>
            <li><input type="checkbox" id="cb1" value={check.value} /><label for="cb1">{check.key}</label></li>
            </>
        )
       
    })}
    
</ul> 
</fieldset> 
    
    </>)
    
}


export default FormikContainer