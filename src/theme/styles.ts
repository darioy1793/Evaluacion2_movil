import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({
    imagen:{
        width: 300,
        height: 300,
     justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    borderRadius: 20,
    shadowColor:'#941212',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    elevation: 10,
},
contenedor: {
    flex: 1,
   backgroundColor: '#0c1727',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius:10
  },
   boton: {
    backgroundColor: '#18383f',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 3,
    borderColor: '#ffffff',
   },
    input: {
    borderWidth: 1,
    borderColor: '#e1dad8',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#535050',
    color: '#e1dcd8',
    fontSize: 16,
  },
  textMoyor: {
    color: '#a00909',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})