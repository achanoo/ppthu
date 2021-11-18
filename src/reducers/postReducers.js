const postReducer = (state, action) => {
  if (action.type === 'IMAGE_SELECTED') {
    return {
      ...state,
      isImageSelected: true,
      imageData: action.payload,
    }
  }

  if (action.type === 'VIDEO_SELECTED') {
    return {
      ...state,
      isVideoSelected: true,
      video: action.payload,
    }
  }

  if (action.type === 'AUDIO_SELECTED') {
    return {
      ...state,
      isAudioSelected: true,
      audio: action.payload,
    }
  }

  if (action.type === 'Image_REMOVE') {
    return {
      ...state,
      isImageSelected: false,
      image: [],
    }
  }
  if (action.type === 'Video_REMOVE') {
    return {
      ...state,
      isVideoSelected: false,
      video: '',
    }
  }
  if (action.type === 'Audio_REMOVE') {
    return {
      ...state,
      isAudioSelected: false,
      audio: '',
    }
  }
  // return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default postReducer
