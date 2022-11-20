import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
//?components
const InputMessageSectionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-top-width: 0.5px;
    border-top-color: #f2f2f2;
`;
const BtnmenuContainer = styled.View`
    flex-direction: row;
`
const Btnmenu = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;
const InputMessageContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 10px;
`;
const InputMessage = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000;
    margin-left: 10px;
`;
const BtnSendContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;


//?types
interface Props { }
const InputMessageSection: FunctionComponent<Props> = ({ }) => {
    const [isChange, setIsChange] = React.useState(false);
    const [textMessage, setTextMessage] = React.useState('');
    return (
        <InputMessageSectionContainer>
            {
                !isChange ? (<BtnmenuContainer>
                    <Btnmenu>
                        <Entypo name="camera" size={24} color="black" />
                    </Btnmenu>
                    {/* btn chose image */}
                    <Btnmenu>
                        <Entypo name="image" size={24} color="black" />
                    </Btnmenu>
                    {/* mic */}
                    <Btnmenu>
                        <Entypo name="mic" size={24} color="black" />
                    </Btnmenu>
                </BtnmenuContainer>) : null
            }
            {
                isChange ? (
                    <Btnmenu onPress={() => setIsChange(!isChange)}>
                        <Entypo name="chevron-left" size={24} color="black" />
                    </Btnmenu>) : null
            }
            <InputMessageContainer>
                {/* btn back */}
                <InputMessage
                    placeholder="Type a message"
                    onFocus={() => setIsChange(true)}
                    onBlur={() => setIsChange(false)}
                    onChangeText={(text) => setTextMessage(text)}
                    multiline={true}

                />
            </InputMessageContainer>
            <BtnSendContainer>
                <Entypo name="paper-plane" size={24} color={
                    textMessage.length > 0 ? "blue" : "#000"
                } />
            </BtnSendContainer>
        </InputMessageSectionContainer>
    );
}

export default InputMessageSection;