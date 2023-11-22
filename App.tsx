import React,  {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import imgGalao from './assets/logo.png';
import ModalGas from './src/ModalGas';

export default function App() {

  const [modalVisibility, setModalVisibility] = useState(false);
  const [alcool,setAlcool] = useState(-1);
  const [gasolina, setGasolina] = useState(-1);
  const [resultado, setResultado] = useState(-1);

  const verificaAlcool = alcool? 1 : 0;
  const verificaGasolina = gasolina? 1 : 0;

  const calcular = () =>{
    //verficar os campos
    if(verificaAlcool === 0 && verificaGasolina === 0){
      alert('preencha os campos corretamente')
    }else{
      //calcular resultado
      calculo();
      //mostrar modal
      mostra();
    }
  }

  const calculo = () =>{
    let calculo = alcool/gasolina;

    //1 - alcool || 0 - gasolina
    if(calculo < 0.7){
        setResultado(1);
    }else{
      setResultado(0);
    }

  }

  const mostra = () =>{
    setModalVisibility(true);
  }

  const tira = (estadoModal: boolean) =>{
    setModalVisibility(estadoModal);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo1} >Projeto AppDesafio2</Text>
      <Text style={styles.titulo2}>Custo beneficio do combustivel</Text>
      
      <Image source={imgGalao} style={styles.imagem}/>

      <Text style={styles.subTitle}>Qual a melhor opção?</Text>

      <View style={styles.inputArea}>
        <Text style={styles.inputTitle}>
          Álcool(preço por litro):
        </Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={(inputText)=>setAlcool(parseFloat(inputText))}></TextInput>
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.inputTitle}>
          Gasolina(preço por litro):
        </Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={(inputText)=>setGasolina(parseFloat(inputText))}></TextInput>
      </View>

      <TouchableOpacity onPress={calcular}>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </View>
      </TouchableOpacity>

      <Modal animationType='fade' visible={modalVisibility}>
        <View style={{flex:1, margin: 20, alignItems:'center', justifyContent:'center'}}>
            <ModalGas onAlteraEstado={()=>tira(false)} resultado={resultado}/>
        </View>
      </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1c26',
    alignItems: 'center'
  },titulo1:{
    color:'white',
    marginTop:30,
    fontSize:35
  },
  titulo2:{
    color:'white',
    textAlign:'center',
    fontSize:15
  },
  imagem:{
    width:200,
    height:200,
    borderRadius:25,
    marginTop:70
  },
  subTitle:{
    color: 'white',
    marginTop:30,
    fontSize: 30,
    marginBottom:50
  },
  inputArea:{
    marginBottom:20
  },
  input:{
    width:330,
    height:45,
    backgroundColor:'white',
    borderRadius:10,
    fontSize:20,
    padding:5
  },
  inputTitle:{
    color:'white',
    fontSize:18,
    marginBottom:4
  },
  botao:{
    width:330,
    height:45,
    backgroundColor:'#fc370c',
    borderRadius:10,
    justifyContent:'center'
  },
  textoBotao:{
    color:'white',
    fontSize:22,
    textAlign:'center'
  }
});
