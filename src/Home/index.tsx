import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageComponent } from 'react-native';
import {
    Container,
    ViewResult,
    TextNumber,
    TextNormal,
    InputPeso,
    ViewPeso,
    ResultCenter,
    TextPeso,
    ViewAltura,
    ViewButton,
    ButtonCalcular,
    TextButton,
    Title,

} from './styles';

export default function Home() {
  const [ pesoInput, setPesoInput ] = useState('0');
  const [ alturaInput, setAlturaInput] = useState('0');
  const [ imc, setImc ] = useState<number>(0);
  const [ status, setStatus ] = useState('');
  const [ colorStatus, setColorStatus ] = useState('#38CC78');

  function Calcular(){
    if(pesoInput ===  '0'|| alturaInput === '0'){
      Alert.alert('Peso ou altura vazios');
      return 0;
    };

      const IMC = Number(pesoInput) / ( Number(alturaInput) * Number(alturaInput));
      setImc(Number(IMC.toFixed(2)));


      // //baixo peso
      if(IMC >= 16 && IMC <= 18.49){

        setColorStatus('orange');

        if(IMC <= 16.99){
          setStatus('Baixo peso II');
        } else {
          setStatus('Baixo peso I');
        }

      };

      // //peso normal
      if(IMC >= 18.50 && IMC <= 24.99){

        setStatus('Peso Normal');
        setColorStatus('#38CC78');

        return 0;
      }

      // //sobrepeso
      if(IMC >= 25.17 && IMC <= 29.99){

        setStatus('Sobrepeso');
        setColorStatus('orange');
      }

      // //obesidade
      if(IMC >= 30 && IMC <= 34.99){

        setStatus('Obesidade I');
        setColorStatus('red');
      }

      if(IMC >= 35 && IMC <= 39.99){

        setStatus('Obesidade II');
        setColorStatus('red');
      }

      if(IMC >= 40){
        setStatus('Obesidade III');
        setColorStatus('red');
      }
      // Alert.alert(String(IMC.toFixed(0)));
  };

  return (
    <Container>
      <StatusBar style="auto" backgroundColor="#eef"/>
      <ResultCenter>
        <Title>
          Índice de Massa de Corporal
        </Title>
        <ViewResult color={colorStatus}>
            <TextNumber color={colorStatus}>
              { imc }
            </TextNumber>
            <TextNormal color={colorStatus}>{status}</TextNormal>
        </ViewResult>
      </ResultCenter>

      <ViewPeso>
        <TextPeso>Seu Peso</TextPeso>
        <InputPeso
          placeholder="60kg"
          keyboardType= "numeric"
          onChangeText={text => setPesoInput(text)}
        />
      </ViewPeso>

      <ViewAltura>
        <TextPeso>Sua Altura</TextPeso>
        <InputPeso
          placeholder="1.83"
          keyboardType= "numeric"
          onChangeText={text => setAlturaInput(text)}
        />
      </ViewAltura>

      <ViewButton>
        <ButtonCalcular onPress={Calcular}>
          <TextButton>Calcular</TextButton>
        </ButtonCalcular>
      </ViewButton>

    </Container>
  );
}


