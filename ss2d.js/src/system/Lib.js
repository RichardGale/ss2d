// Copyright (c) 2013 David Gallardo Moreno. All rights reserved.

/**
 * @fileoverview Used to build a single JS file with all ss2d classes.
 * @author David Gallardo Moreno (portalg@gmail.com)
 */

goog.provide('ss2dLib');

goog.require('ss2d');

//animation
goog.require('ss2d.DelayedInvocation');
goog.require('ss2d.IAnimatable');
goog.require('ss2d.Juggler');
goog.require('ss2d.Transitions');
goog.require('ss2d.Tween');
goog.require('ss2d.TweenedProperty');

//componentes/audio
goog.require('ss2d.HTML5Audio');
goog.require('ss2d.IAudioComponent');
goog.require('ss2d.WebAudio');

//componentes/graphics
goog.require('ss2d.Color');
goog.require('ss2d.Reel');
goog.require('ss2d.ReelFrame');
goog.require('ss2d.ReelSet');
goog.require('ss2d.Texture');
goog.require('ss2d.TextureAtlas');
goog.require('ss2d.BitmapFont');

//componentes/loaders
goog.require('ss2d.ResourceManager');
goog.require('ss2d.ILoader');
goog.require('ss2d.AudioLoader');
goog.require('ss2d.TextureAtlasLoader');
goog.require('ss2d.TextureLoader');
goog.require('ss2d.BitmapFontLoader');

//components/interaction
goog.require('ss2d.Pickable');

//components/physics
goog.require('ss2d.PhysicalWorld');
goog.require('ss2d.RigidBody');

//components/skeleton
goog.require('ss2d.SkeletalAnimation');
goog.require('ss2d.Skeleton');

//maths
goog.require('ss2d.Matrix3');
goog.require('ss2d.Point');
goog.require('ss2d.Rectangle');

//networking/client
goog.require('ss2d.ClientCommunicationInterface');
goog.require('ss2d.ClientView');

//networking/server
goog.require('ss2d.InputProxy');
goog.require('ss2d.ServerCommunicationInterface');
goog.require('ss2d.ServerView');

//rendering
goog.require('ss2d.RenderSupport');

//scene
goog.require('ss2d.DisplayObject');
goog.require('ss2d.DisplayObjectContainer');
goog.require('ss2d.MultiplayerScene');
goog.require('ss2d.Quad');
goog.require('ss2d.ReelSprite');
goog.require('ss2d.Sprite');
goog.require('ss2d.TextSprite');
goog.require('ss2d.BitmapTextSprite');
goog.require('ss2d.SkeletalSprite');
goog.require('ss2d.ParticleEmitter');
goog.require('ss2d.GPUParticleEmitter');

//system
goog.require('ss2d.DefaultConfig');
goog.require('ss2d.Defines');
goog.require('ss2d.Input');
goog.require('ss2d.Object');
goog.require('ss2d.View');

//utils
goog.require('XML.ObjTree');

