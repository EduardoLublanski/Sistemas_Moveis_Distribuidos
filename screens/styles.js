import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#a3ccf1', // Cor de fundo leve
  },
  input: {
    marginLeft: 400,
    marginRight: 400,
    marginBottom: 15,
    backgroundColor: '#d6d3d3', // Fundo branco para campos de entrada
  },
  button: {
    marginLeft: 650,
    marginRight: 650,
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 10, // Canto arredondado para botões
  },
  header: {
    backgroundColor: '#f8e075', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto circular
    backgroundColor: '#ddd', // Cor de fundo para área de foto
  },
});

