import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export class Listen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isPlaying: false,
      currentTime: '0:00',
      duration: '1:00',
      synthesizer: null,
    };
  }

  componentDidMount() {
    // Create a SpeechSynthesis object
    this.setState({ synthesizer: window.speechSynthesis });
  }

  handlePlay = () => {
    const { text, synthesizer } = this.state;

    if (text.trim() && synthesizer) {
      this.setState({ isPlaying: true, currentTime: '0:00' });

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        this.setState({ isPlaying: false, currentTime: '0:00' });
      };

      synthesizer.speak(utterance);
    }
  };

  handleForward = () => {
    // Add logic to forward the audio
  };

  handleBackward = () => {
    // Add logic to backward the audio
  };

  render() {
    const { text, isPlaying, currentTime, duration } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: 'white', padding: 24 }}>
        {/* Header */}
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1f2937', marginBottom: 8 }}>
            Welcome to Odio AI!
          </Text>
          <Text style={{ fontSize: 16, color: '#4b5563' }}>
            Listen AI brings you the highest quality natural voices available, making every listening experience seamless and enjoyable.
          </Text>
        </View>

        {/* Text Input */}
        <View style={{ marginBottom: 32 }}>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#d1d5db', padding: 8, borderRadius: 4 }}
            placeholder="Enter text to listen"
            value={text}
            onChangeText={(text) => this.setState({ text })}
          />
          <TouchableOpacity
            style={{ backgroundColor: '#3b82f6', padding: 8, borderRadius: 4, marginTop: 8 }}
            onPress={this.handlePlay}
            disabled={!text.trim()}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Play</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderTopWidth: 1, borderTopColor: '#d1d5db', backgroundColor: 'white' }}>
          {/* Timer */}
          <Text style={{ color: '#4b5563' }}>{currentTime} / {duration}</Text>

          {/* Play/Pause Button */}
          <TouchableOpacity 
            style={{ flexDirection: 'row', alignItems: 'center' }}
            disabled={!text.trim()}
            onPress={this.handlePlay}
          >
            <MaterialIcons name={isPlaying ? "pause" : "play-arrow"} size={32} color={isPlaying ? "#3b82f6" : "#d1d5db"} />
          </TouchableOpacity>

          {/* Speed Adjustment Button */}
          <TouchableOpacity 
            style={{ flexDirection: 'row', alignItems: 'center' }}
            disabled={!isPlaying}
          >
            <MaterialIcons name="speed" size={24} color={isPlaying ? "#3b82f6" : "#d1d5db"} />
            <Text style={{ marginLeft: 8, color: isPlaying ? "#3b82f6" : "#9ca3af" }}>Speed</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Listen;