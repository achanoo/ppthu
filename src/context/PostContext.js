import React from 'react'
import reducer from './../reducers/postReducers'

const PostContext = React.createContext()

const initialStates = {
  isImageSelected: false,
  isVideoSelected: false,
  isAudioSelected: false,
  imageData: [],
  video: '',
  audio: '',
}

const PostProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialStates)
  const handleInputImage = (data) => {
    let fileObj = []
    let fileArray = []

    fileObj.push(data)
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    // console.log(fileArray)
    // fileArray = fileArray.map((data) => {
    //   return { source: data.blob }
    // })

    dispatch({ type: 'IMAGE_SELECTED', payload: fileArray })
  }

  const handleInputVideo = (video) => {
    var fileUrl = window.URL.createObjectURL(video[0])
    dispatch({ type: 'VIDEO_SELECTED', payload: fileUrl })
  }

  const handleInputAudio = (audio) => {
    var fileUrl = window.URL.createObjectURL(audio[0])
    dispatch({ type: 'AUDIO_SELECTED', payload: fileUrl })
  }

  return (
    <PostContext.Provider
      value={{ ...state, handleInputImage, handleInputVideo, handleInputAudio }}
    >
      {children}
    </PostContext.Provider>
  )
}

export const usePostContext = () => {
  return React.useContext(PostContext)
}

export { PostProvider }
