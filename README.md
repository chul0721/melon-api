# Melon API v2

<img src="./public/melon.png" width="300" /><br /><br />
해당 API는 [(주)카카오엔터테인먼트](https://kakaoent.com/)의 [멜론](http://melon.com/) 서비스의 비공식 API입니다.

# 소개

이 문서에는 해당 Rest API에 대한 [사용법](#Docs)이 작성되어 있습니다. 오타, 혹은 잘못된 정보나 오류, 기재되지 않은 정보 등이 있다면 PR을 생성하여 주시면 검토 후 승인하도록 하겠습니다.

# Docs

목차

- [1. Chart](#Chart)
- [2. Lyrics (on process)](#Lyrics)

## Chart

`baseURL`: https://api.chuls.works:3535/chart

| Parameter | Type     | Description                                    | Values                                   | Required                                                                       |
| :-------- | :------- | :--------------------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------- |
| `?sort`   | `string` | melon API을 이용하여 가져올 정보의 종류를 선택 | 'chart'                                  | **필수**                                                                       |
| `?url`    | `string` | 가져올 차트의 종류를 선택합니다.               | 'main', 'day', 'week', 'month', 'lyrics' | **필수 아님**, 기본값 'main'                                                   |
| `?region` | `string` | 가져올 차트의 지역을 선택합니다.               | 'all', 'domestic', 'foreign', 'others'   | genre 항목 설정 시 **필수**, 단 설정하지 않을 경우 **필수 아님**, 기본값 'all' |
| `?genre`  | `string` | 가져올 차트의 장르를 선택합니다.               | [**아래 참고**](#genre)                  | **필수 아님**                                                                  |

### genre

genre 항목 설정 시 아래 중 `한 가지` 타입을 선택할 수 있습니다.

- "all"의 경우 장르를 선택할 수 없습니다.

- "domestic"

```json
["all", "ballad", "dance", "hiphop", "R&B", "indie", "rock", "trot", "folk"]
```

- "foreign"

```json
["all", "pop", "rock", "electronica", "hiphop", "R&B", "folk"]
```

- "others"

```json
["OST", "JAZZ", "newage", "jpop", "world", "ccm", "kids", "religion", "traditional"]
```

## Lyrics

준비 중입니다.

# Stack

- Nest.js
- TypeScript
- Jest
- cheerio
