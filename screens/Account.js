import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../constants';

const Account = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 15,
              height: 120,
              width: 120,
              borderRadius: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.dog}
              style={{
                height: 120,
                width: 120,
                borderRadius: 80,
              }}
            />
          </View>
          <View
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#1a012a',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Nguyễn Đức Chiến
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: '#757575',
                fontSize: 18,
              }}>
              They are only as good as the world allow them to be.
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 3,
                  marginHorizontal: 5,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  borderWidth: 2,
                  borderColor: '#29bff2',
                }}>
                <Text>Edit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 3,
                  marginHorizontal: 5,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  borderWidth: 2,
                  borderColor: '#29bff2',
                }}>
                <Text>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 5,
              height: 80,
              width: '100%',

              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#171616',
                  fontWeight: 'bold',
                  fontSize: 17,
                }}>
                1
              </Text>
              <Text
                style={{
                  color: '#959494',
                  fontSize: 16,
                }}>
                Posts
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#171616',
                  fontWeight: 'bold',
                  fontSize: 17,
                }}>
                1,320
              </Text>
              <Text
                style={{
                  color: '#959494',
                  fontSize: 16,
                }}>
                Followers
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#171616',
                  fontWeight: 'bold',
                  fontSize: 17,
                }}>
                13
              </Text>
              <Text
                style={{
                  color: '#959494',
                  fontSize: 16,
                }}>
                Following
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              width: '100%',
            }}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 15,
                backgroundColor: '#e0e0e0',
                borderTopLeftRadius: 13,
                borderTopRightRadius: 13,
              }}>
              <View
                style={{
                  marginTop: 13,
                  height: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 23,
                }}>
                <Image
                  source={images.dog}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                  }}
                />
                <View>
                  <Text
                    style={{
                      marginStart: 15,
                      fontSize: 16,
                      color: '#111',
                      fontWeight: 'bold',
                    }}>
                    Nguyễn Đức Chiến
                  </Text>
                  <Text
                    style={{
                      marginStart: 15,
                      fontSize: 16,
                      color: '#888888',
                    }}>
                    1 month ago
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    style={{
                      paddingStart: 10,
                    }}>
                    <Image
                      source={images.dots}
                      style={{
                        height: 20,
                        width: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#2b2b2b',
                    fontSize: 16,
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Nếu như ai đó ghét bạn chẳng vì lý do gì cả, việc bạn nên làm
                  là cho họ một lý do.
                </Text>
              </View>
              <View
                style={{
                  height: 230,
                  marginTop: 3,
                }}>
                <Image
                  resizeMode="cover"
                  source={images.chien2}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>
              <View
                style={{
                  height: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.like2}
                  style={{
                    marginStart: 15,
                    height: 18,
                    width: 18,
                  }}
                />
                <Text
                  style={{
                    color: '#0c4f66',
                    fontSize: 14,
                    margin: 5,
                  }}>
                  103 people liked this post
                </Text>
              </View>
              <View
                style={{
                  height: 55,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  style={{
                    padding: 5,
                  }}>
                  <View
                    style={{
                      margin: 5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={images.like}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                    />
                    <Text
                      style={{
                        color: '#1f1f1f',
                        fontSize: 16,
                        margin: 5,
                      }}>
                      Like
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 5,
                  }}>
                  <View
                    style={{
                      margin: 5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={images.comments}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                    />
                    <Text
                      style={{
                        color: '#1f1f1f',
                        fontSize: 16,
                        margin: 5,
                      }}>
                      Comment
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 5,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={images.sharing}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                    />
                    <Text
                      style={{
                        color: '#1f1f1f',
                        fontSize: 16,
                        margin: 5,
                      }}>
                      Share
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
