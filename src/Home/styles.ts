import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface C {
  color: string;
}

export const Container = styled.ScrollView`
    flex: 1;
    /* margin: 40px 20px; */
    background: #eef;
    margin-top: 20px;
`;

export const ResultCenter = styled.View`
  align-items: center;
  margin-top: 20px;
`

export const Title = styled.Text`
  margin: 15px;
  font-size: 18px;
  font-weight: bold;
`

export const ViewResult = styled.View<C>`
    width:160px;
    height: 160px;
    border-radius: 80px;
    border-color: ${ props => props.color};
    border-width:6px;
    justify-content:center;
    align-items:center;
`;

export const TextNumber = styled.Text<C>`
    font-size: 40px;
    font-weight: 200;
    color: ${ props => props.color};
`;

export const TextNormal = styled.Text<C>`
   font-size: 20px;
   color: ${ props => props.color};
`;


export const ViewPeso = styled.View`
  margin: 40px 40px 20px;

`;

export const TextPeso = styled.Text`
  font-size: 17px;
  color: #bbb;
`

export const InputPeso = styled.TextInput`
    border-width:1px;
    margin-top: 5px;
    height: 50px;
    border-radius: 5px;
    text-align: center;
    font-size: 30px;
    background:#fff;
    border: none;
`;

export const ViewAltura = styled.View`
  margin: 10px 40px;

`;

export const ViewButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ButtonCalcular = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #322E53;
  width: 200px;
  height: 50px;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
`


