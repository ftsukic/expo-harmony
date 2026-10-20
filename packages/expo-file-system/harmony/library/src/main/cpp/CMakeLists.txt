# @expo-harmony-copyright
#
# Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
# Released under MIT license. https://github.com/renbaoshuo/expo-harmony
# @end-expo-harmony-copyright

cmake_minimum_required(VERSION 3.5)
project(expo_file_system_atomic)

add_library(expo_file_system_atomic SHARED AtomicFileOperations.cpp)
target_compile_features(expo_file_system_atomic PRIVATE cxx_std_17)
target_link_libraries(expo_file_system_atomic PUBLIC libace_napi.z.so)
