import React, { useState } from 'react'
import { Modal, Text, Button, SafeAreaView } from 'react-native'

export const Formulario = ({ modalVisible }) => {

    console.log(modalVisible)



    return (

        <Modal
            animationType={"slide"}
            visible={modalVisible}
        >
            <SafeAreaView>



            </SafeAreaView>
        </Modal>

    )
}
