# @expo-harmony-copyright
#
# Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
# Released under MIT license. https://github.com/renbaoshuo/expo-harmony
# @end-expo-harmony-copyright

cmake_minimum_required(VERSION 3.5)
project(expo_localization)

add_library(expo_localization SHARED Localization.cpp)
target_compile_features(expo_localization PRIVATE cxx_std_17)
target_compile_options(expo_localization PRIVATE -Wall -Wextra)
target_link_libraries(expo_localization PRIVATE libace_napi.z.so libicu.so)
