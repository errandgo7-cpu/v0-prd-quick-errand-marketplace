"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"

interface MediaPlayerProps {
  type: "audio" | "video"
  src: string
  title?: string
  thumbnail?: string
}

export function MediaPlayer({ type, src, title, thumbnail }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState([70])
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null)

  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause()
      } else {
        mediaRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (mediaRef.current) {
      mediaRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value)
    if (mediaRef.current) {
      mediaRef.current.volume = value[0] / 100
    }
  }

  const handleTimeUpdate = () => {
    if (mediaRef.current) {
      setCurrentTime(mediaRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (mediaRef.current) {
      setDuration(mediaRef.current.duration)
    }
  }

  const handleSeek = (value: number[]) => {
    if (mediaRef.current) {
      mediaRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {type === "video" ? (
          <div className="relative aspect-video bg-black">
            <video
              ref={mediaRef as React.RefObject<HTMLVideoElement>}
              src={src}
              poster={thumbnail}
              className="h-full w-full"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
              <Button
                size="icon"
                variant="ghost"
                className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white ml-1" />}
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
            <audio
              ref={mediaRef as React.RefObject<HTMLAudioElement>}
              src={src}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            />
            <div className="text-center">
              <div className="mb-4 h-24 w-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                <Volume2 className="h-12 w-12 text-primary" />
              </div>
              {title && <p className="font-display text-lg font-semibold">{title}</p>}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="p-4 space-y-3 bg-card">
          {/* Progress Bar */}
          <div className="space-y-1">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={handleSeek}
              className="cursor-pointer"
            />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <Button size="icon" variant="ghost" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>

            <div className="flex items-center gap-2 flex-1 max-w-xs mx-4">
              <Button size="icon" variant="ghost" onClick={toggleMute}>
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
              <Slider value={volume} max={100} step={1} onValueChange={handleVolumeChange} className="flex-1" />
            </div>

            {type === "video" && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  if (mediaRef.current && "requestFullscreen" in mediaRef.current) {
                    ;(mediaRef.current as HTMLVideoElement).requestFullscreen()
                  }
                }}
              >
                <Maximize2 className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
