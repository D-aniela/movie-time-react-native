import React, { useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

const DetailsScreen = ({ navigation, route }) => {
  const movie = route.params.movie
  const [movieDetails, setMovieDetails] = useState(null)
  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      'http://www.omdbapi.com/?apikey=f2803024&t=Star+Wars&y=1977',
    )
    xhr.send()
    xhr.onload = () => {
      if (xhr.status == 200) {
        let response = JSON.parse(xhr.response)
        setMovieDetails(response)
      } else {
        console.log(`HTTP Request Failed ${xhr.status}`)
      }
    }
    xhr.onerror = () => {
      console.log('Error')
    }
  }, [])

  return (
    <View style={styles.mainView}>
      <Text>{movieDetails?.Title}</Text>
      <Text>{movieDetails?.Released}</Text>
      <Text>{movieDetails?.Plot}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default DetailsScreen
