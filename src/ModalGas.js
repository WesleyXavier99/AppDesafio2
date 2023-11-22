import React from 'react';
import { Button, View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import imgGargalo from './../assets/gas.png'

const ModalGas = ({onAlteraEstado,resultado})=>{

    return(
        <View style={{width:'100%', height:'100%', backgroundColor:'#292929', borderRadius:20, alignItems:'center'}}>
            <Image
                source={imgGargalo}
                style={{marginTop:70}}
            />

            <Text style={{color:'#a9f04d', marginTop:30, fontSize: 30}}>Compensa usar {resultado==1?'álcool':'gasolina'}</Text>


            <Text style={{color:'white', marginTop:20, fontSize: 25}}>Com os preços:</Text>

            <Text style={{color:'white', marginTop:5, fontSize: 15}}>Alcool: R$ 3,29</Text>
            <Text style={{color:'white', marginTop:5, fontSize: 15}}>Gasolina: R$ 4,92</Text>

            <TouchableOpacity onPress={()=>onAlteraEstado(false)}>
                <View style={{ borderColor:'#fc370c',borderWidth:1, marginTop:30,width:330,height:45,backgroundColor:'transparent',borderRadius:10,justifyContent:'center'}}>
                    <Text style={{textAlign:'center', fontSize:23, color:'#fc370c'}}>Calcular Novamente</Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}

export default ModalGas;