# @expo-harmony-copyright
#
# Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
# Released under MIT license. https://github.com/renbaoshuo/expo-harmony
# @end-expo-harmony-copyright

cmake_minimum_required(VERSION 3.19)
project(expo_updates LANGUAGES C CXX)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)
file(GLOB BZIP2_SOURCES "vendor/bzip2/*.c")
add_library(expo_updates SHARED UpdatesPatch.cpp UpdatesRecovery.cpp vendor/bspatch/bspatch.c ${BZIP2_SOURCES})
target_include_directories(expo_updates PRIVATE vendor/bzip2)
target_link_libraries(expo_updates PUBLIC libace_napi.z.so)
