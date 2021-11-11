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
  // return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default postReducer
