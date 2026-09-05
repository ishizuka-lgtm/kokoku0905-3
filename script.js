// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験・調査について",
          "content": "本実験・調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "1．本実験・調査の目的",
          "content": "広告の効果について調べることが本実験・調査の目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2．本実験・調査の手続き",
          "content": "もし、本実験・調査に参加していただく場合、いくつかの広告をご覧になっていただきます。この実験・調査の所要時間は約5分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3．潜在的なリスク・苦痛など",
          "content": "実験による多少の疲労は除き、潜在的なリスクや苦痛はございません。また、いつ、いかなる理由でも、自由に実験を中止していただけます（6．参加と中止もご参照ください）。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4．参加による利益",
          "content": "あなたが本実験・調査に参加することで認知、感情についての研究の発展につながります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5．匿名性の確保",
          "content": "本実験・調査によって得られた情報は法律による開示請求を除き、匿名性が維持されます。 匿名性は実験参加番号者の付与、統計的な解析によって保たれます。 収集されたデータは匿名化した上で、統計的な処理を行い、論文や発表で公表されます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "6．参加と中止",
          "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。 また、参加した場合でも、でも、そのような理由でも、途中で実験・調査を中止することができます。 もし、途中で実験・調査を中止した場合は、「ESCキー」を押した後、ウィンドウを閉じることで実験・調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "7．実験・調査実施者へのお問い合わせ",
          "content": "本実験・調査について質問がある場合は、実施者または実施責任者にお問い合わせください。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "esc"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;

// 価格条件（1=高価格, 2=中価格, 3=低価格）
this.state.priceCond = (participantID % 3) + 1;
this.state.price = ['高価格', '中価格', '低価格'][this.state.priceCond - 1];

// 商品条件（1=腕時計, 2=財布）
this.state.adCond = (Math.floor(participantID / 3) % 2) + 1;
this.state.adType = ['腕時計', '財布'][this.state.adCond - 1];

// 条件ラベル（例: FL = 財布・低価格 / WH = 腕時計・高価格）
this.state.prodCode  = ['W', 'F'][this.state.adCond - 1];
this.state.priceCode = ['H', 'M', 'L'][this.state.priceCond - 1];
this.state.cond = this.state.prodCode + this.state.priceCode;

}
      },
      "title": "informed consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "Age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "性別",
          "options": [
            {
              "label": "男",
              "coding": "1"
            },
            {
              "label": "女",
              "coding": "2"
            },
            {
              "label": "その他",
              "coding": "3"
            }
          ],
          "name": "gender"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "information"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "広告を見て質問にお答えください。広告のページは4秒後自動で切り替わります。",
          "content": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "introduction"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "high medium low Sequence",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "low all Sequence",
          "skip": "${this.state.priceCond != 3}",
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "low random Sequence",
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Watch:human",
                  "skip": "${this.state.adCond != 1}",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "600",
                          "height": "570",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"腕低い.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_腕時計_低価格.jpg": "embedded\u002Fc71290d56f5947c6d6fc004a3271b900e476d9dceba7110398e3a426651843e1.jpg",
                        "腕低い.jpg": "embedded\u002Fa7d272638c64f4b2b58a4638b95ce70647fa29929226b6e9c6adb03592dbcd73.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Watch:human",
                      "timeout": "4000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この商品を買いたくなった",
                              "coding": "WL1"
                            },
                            {
                              "label": "このブランドへの信頼度が高まった",
                              "coding": "WL2"
                            },
                            {
                              "label": "この広告への不快感を感じた",
                              "coding": "WL3"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(WL)"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Wallet:human",
                  "skip": "${this.state.adCond != 2}",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "600",
                          "height": "570",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"財布ひく.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_財布_低価格.jpg": "embedded\u002F514ae607e3d86d370299c68d44201dc1884d08ae830b9e0cbaa060f0b281afeb.jpg",
                        "財布ひく.jpg": "embedded\u002Fa4c06cfd107f54be8536d54db0b954f559a2c22bd86fee140b3a9ea642ce0efc.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Wallet:human",
                      "timeout": "4000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この商品を買いたくなった",
                              "coding": "FL1"
                            },
                            {
                              "label": "このブランドへの信頼度が高まった",
                              "coding": "FL2"
                            },
                            {
                              "label": "この広告への不快感を感じた",
                              "coding": "FL3"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(FL)"
                    }
                  ]
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "low error Sequence",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "先ほどご覧いただいた広告について",
                      "content": "広告に登場していたモデルは、AIによって生成されたものだと思いますか。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "AIによって生成されたモデルだと思いますか？",
                      "options": [
                        {
                          "label": "そう思う",
                          "coding": "AI_L_yes"
                        },
                        {
                          "label": "そう思わない",
                          "coding": "AI_L_no"
                        }
                      ],
                      "name": "AIorNot"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "AIorNot"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "この実験は、「AIキャラクターが使用された広告は消費者の購買意欲を低下させること」「価格帯が高くなるほど、AIキャラクター広告の購買意欲の低下が顕著になること」を検証するために行われました。この実験の意図にどの程度気づいていたかを5段階で評価してください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizuki_L_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizuki_L_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizuki_L_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizuki_L_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizuki_L_1"
                        }
                      ],
                      "name": "5"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "kizuitetaka"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "実験・調査の実施に支障のある大きな問題が生じた",
                          "coding": "BigTRO"
                        },
                        {
                          "label": "実験・調査の実施に支障のない程度の問題が生じた",
                          "coding": "SmalTRO"
                        },
                        {
                          "label": "実験・調査の実施に問題はなかった",
                          "coding": "NoTRO"
                        }
                      ],
                      "label": "実験・調査を実施する上でなにか問題はありませんでしたか？",
                      "help": "例えば、プログラムの誤動作、来客や電話などの妨害、説明が分からなかったなども「問題」としてお答えください。",
                      "name": "Problem"
                    },
                    {
                      "required": false,
                      "type": "textarea",
                      "label": "問題の内容",
                      "help": "「実験・調査の実施に支障のある大きな問題が生じた」または「実験・調査の実施に支障のない程度の問題が生じた」とご回答くださった方は、その内容を以下に記入してください。",
                      "name": "ErrorReport"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ→",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Error"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "データの除外を希望しますか？",
                      "content": "今回ご提供いただいたデータは、研究発表などの学術利用に活用させていただく予定です。何らかの理由（同意を撤回したい、問題があったので除外してほしいなど）でデータの除外を希望される方はお知らせください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "はい、データを除外してください",
                          "coding": "Nodata"
                        },
                        {
                          "label": "いいえ、データを除外する必要はありません",
                          "coding": "Usedata"
                        }
                      ],
                      "name": "Exdata"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Exclusion Data"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "メールアドレスのご記入",
                      "content": "差し支えなければemailを記入してください。　謝礼金を送金する際に利用します。"
                    },
                    {
                      "required": false,
                      "type": "input",
                      "label": "メールアドレス",
                      "attributes": {
                        "type": "email",
                        "placeholder": "example@example.com"
                      },
                      "help": "半角で入力してください",
                      "name": "Email"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "email"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "これで実験は終了です。「終わり」ボタンを押してください。ご協力ありがとうございました。"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "終わり",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "SscUpMj1pTj4",
    filename: filename,
    data: data,
  }),
});

}
                  },
                  "title": "End",
                  "tardy": true
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "medium all Sequence",
          "skip": "${this.state.priceCond != 2}",
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "medium random Sequence",
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Watch:human",
                  "skip": "${this.state.adCond != 1}",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "600",
                          "height": "570",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"腕真ん中.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_腕時計_中価格.jpg": "embedded\u002F2e4ab43dd670f999a6cd763fd1cc47f18fc82b51bae4b361f775bda3442ae1af.jpg",
                        "腕真ん中.jpg": "embedded\u002F492c3e6eb4aef912ec57762eb5371649da9dffb62dd203be485f726e77466708.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Watch:human",
                      "timeout": "4000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この商品を買いたくなった",
                              "coding": "WM1"
                            },
                            {
                              "label": "このブランドへの信頼度が高まった",
                              "coding": "WM2"
                            },
                            {
                              "label": "この広告への不快感を感じた",
                              "coding": "WM3"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(WM)"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Wallet:human",
                  "skip": "${this.state.adCond != 2}",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "600",
                          "height": "570",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"財布なか.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_財布_中価格.jpg": "embedded\u002Fa1e36ad3001582f1370226cf50acca70b6321492c7c9d3c4981b873c9d6be0a8.jpg",
                        "財布なか.jpg": "embedded\u002F932a721b62a6647172025249aa1ed52367b1a32a71e93a9a11f3cdf9d7cfe0dd.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Wallet:human",
                      "timeout": "4000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この商品を買いたくなった",
                              "coding": "FM1"
                            },
                            {
                              "label": "このブランドへの信頼度が高まった",
                              "coding": "FM2"
                            },
                            {
                              "label": "この広告への不快感を感じた",
                              "coding": "FM3"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(FM)"
                    }
                  ]
                }
              ]
            },
            {
              "title": "medium error sequence",
              "type": "lab.flow.Sequence",
              "parameters": {},
              "plugins": [],
              "metadata": {
                "title": "",
                "description": "",
                "repository": "",
                "contributors": ""
              },
              "files": {},
              "responses": {},
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "先ほどご覧いただいた広告について",
                      "content": "広告に登場していたモデルは、AIによって生成されたものだと思いますか。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "AIによって生成されたモデルだと思いますか？",
                      "options": [
                        {
                          "label": "そう思う",
                          "coding": "AI_M_yes"
                        },
                        {
                          "label": "そう思わない",
                          "coding": "AI_M_no"
                        }
                      ],
                      "name": "AIorNot"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "AIorNot"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "この実験は、「AIキャラクターが使用された広告は消費者の購買意欲を低下させること」「価格帯が高くなるほど、AIキャラクター広告の購買意欲の低下が顕著になること」を検証するために行われました。この実験の意図にどの程度気づいていたかを5段階で評価してください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizuki_M_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizuki_M_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizuki_M_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizuki_M_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizuki_M_1"
                        }
                      ],
                      "name": "5"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "kizuitetaka"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "実験・調査の実施に支障のある大きな問題が生じた",
                          "coding": "BigTRO"
                        },
                        {
                          "label": "実験・調査の実施に支障のない程度の問題が生じた",
                          "coding": "SmalTRO"
                        },
                        {
                          "label": "実験・調査の実施に問題はなかった",
                          "coding": "NoTRO"
                        }
                      ],
                      "label": "実験・調査を実施する上でなにか問題はありませんでしたか？",
                      "help": "例えば、プログラムの誤動作、来客や電話などの妨害、説明が分からなかったなども「問題」としてお答えください。",
                      "name": "Problem"
                    },
                    {
                      "required": false,
                      "type": "textarea",
                      "label": "問題の内容",
                      "help": "「実験・調査の実施に支障のある大きな問題が生じた」または「実験・調査の実施に支障のない程度の問題が生じた」とご回答くださった方は、その内容を以下に記入してください。",
                      "name": "ErrorReport"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ→",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Error"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "データの除外を希望しますか？",
                      "content": "今回ご提供いただいたデータは、研究発表などの学術利用に活用させていただく予定です。何らかの理由（同意を撤回したい、問題があったので除外してほしいなど）でデータの除外を希望される方はお知らせください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "はい、データを除外してください",
                          "coding": "Nodata"
                        },
                        {
                          "label": "いいえ、データを除外する必要はありません",
                          "coding": "Usedata"
                        }
                      ],
                      "name": "Exdata"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Exclusion Data"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "メールアドレスのご記入",
                      "content": "差し支えなければemailを記入してください。　謝礼金を送金する際に利用します。"
                    },
                    {
                      "required": false,
                      "type": "input",
                      "label": "メールアドレス",
                      "attributes": {
                        "type": "email",
                        "placeholder": "example@example.com"
                      },
                      "help": "半角で入力してください",
                      "name": "Email"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "email"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "これで実験は終了です。「終わり」ボタンを押してください。ご協力ありがとうございました。"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "終わり",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "SscUpMj1pTj4",
    filename: filename,
    data: data,
  }),
});

}
                  },
                  "title": "End",
                  "tardy": true
                }
              ]
            }
          ]
        },
        {
          "title": "high all  sequence",
          "type": "lab.flow.Sequence",
          "parameters": {},
          "plugins": [],
          "metadata": {
            "title": "",
            "description": "",
            "repository": "",
            "contributors": ""
          },
          "skip": "${this.state.priceCond != 1}",
          "files": {},
          "responses": {},
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "high random Sequence",
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Watch:human",
                  "skip": "${this.state.adCond != 1}",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "600",
                          "height": "570",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"腕高い.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_腕時計_高価格.jpg": "embedded\u002F6efd0e8339fd8b03c27f86c7bf3e9bebab3651727689cf74cef8b8adcac52f79.jpg",
                        "腕高い.jpg": "embedded\u002Fc5da59f5081cc3c3d969c94feda5f6e69b4e30652131830151ac1d8a788bac3a.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Watch:human",
                      "timeout": "4000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この商品を買いたくなった",
                              "coding": "WH1"
                            },
                            {
                              "label": "このブランドへの信頼度が高まった",
                              "coding": "WH2"
                            },
                            {
                              "label": "この広告への不快感を感じた",
                              "coding": "WH3"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(WH)"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Wallet:human",
                  "skip": "${this.state.adCond != 2}",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "600",
                          "height": "570",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"財布たか.jpg\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "広告_財布_高価格.jpg": "embedded\u002F5e4b87fbff282caa8b7a7cc3885956e47e1c93ddf646b5219bc5aa9b823241f3.jpg",
                        "財布たか.jpg": "embedded\u002Fa2fa4204c53830001661cdb639dfb78c273b701a5b21d785744a0e859faa7383.jpg"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Wallet:human",
                      "timeout": "4000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "likert",
                          "items": [
                            {
                              "label": "この商品を買いたくなった",
                              "coding": "FH1"
                            },
                            {
                              "label": "このブランドへの信頼度が高まった",
                              "coding": "FH2"
                            },
                            {
                              "label": "この広告への不快感を感じた",
                              "coding": "FH3"
                            }
                          ],
                          "width": "5",
                          "anchors": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                          ],
                          "label": "当てはまるものをお答えください。",
                          "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "次へ",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "question(FH)"
                    }
                  ]
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "high error Sequence",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "先ほどご覧いただいた広告について",
                      "content": "広告に登場していたモデルは、AIによって生成されたものだと思いますか。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "AIによって生成されたモデルだと思いますか？",
                      "options": [
                        {
                          "label": "そう思う",
                          "coding": "AI_H_yes"
                        },
                        {
                          "label": "そう思わない",
                          "coding": "AI_H_no"
                        }
                      ],
                      "name": "AIorNot"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "AIorNot"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "この実験は、「AIキャラクターが使用された広告は消費者の購買意欲を低下させること」「価格帯が高くなるほど、AIキャラクター広告の購買意欲の低下は顕著になること」を検証するために行われました。この仮説にどの程度気づいていたかを5段階で評価してください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "5=完全に気付いていた　・・・　１＝全く気付かなかった",
                      "options": [
                        {
                          "label": "5",
                          "coding": "kizuki_H_5"
                        },
                        {
                          "label": "4",
                          "coding": "kizuki_H_4"
                        },
                        {
                          "label": "3",
                          "coding": "kizuki_H_3"
                        },
                        {
                          "label": "2",
                          "coding": "kizuki_H_2"
                        },
                        {
                          "label": "1",
                          "coding": "kizuki_H_1"
                        }
                      ],
                      "name": "5"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "kizuitetaka"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "実験・調査の実施に支障のある大きな問題が生じた",
                          "coding": "BigTRO"
                        },
                        {
                          "label": "実験・調査の実施に支障のない程度の問題が生じた",
                          "coding": "SmalTRO"
                        },
                        {
                          "label": "実験・調査の実施に問題はなかった",
                          "coding": "NoTRO"
                        }
                      ],
                      "label": "実験・調査を実施する上でなにか問題はありませんでしたか？",
                      "help": "例えば、プログラムの誤動作、来客や電話などの妨害、説明が分からなかったなども「問題」としてお答えください。",
                      "name": "Problem"
                    },
                    {
                      "required": false,
                      "type": "textarea",
                      "label": "問題の内容",
                      "help": "「実験・調査の実施に支障のある大きな問題が生じた」または「実験・調査の実施に支障のない程度の問題が生じた」とご回答くださった方は、その内容を以下に記入してください。",
                      "name": "ErrorReport"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ→",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Error"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "データの除外を希望しますか？",
                      "content": "今回ご提供いただいたデータは、研究発表などの学術利用に活用させていただく予定です。何らかの理由（同意を撤回したい、問題があったので除外してほしいなど）でデータの除外を希望される方はお知らせください。"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "はい、データを除外してください",
                          "coding": "Nodata"
                        },
                        {
                          "label": "いいえ、データを除外する必要はありません",
                          "coding": "Usedata"
                        }
                      ],
                      "name": "Exdata"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Exclusion Data"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "メールアドレスのご記入",
                      "content": "差し支えなければemailを記入してください。　謝礼金を送金する際に利用します。"
                    },
                    {
                      "required": false,
                      "type": "input",
                      "label": "メールアドレス",
                      "attributes": {
                        "type": "email",
                        "placeholder": "example@example.com"
                      },
                      "help": "半角で入力してください",
                      "name": "Email"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "email"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "これで実験は終了です。ご協力ありがとうございました。"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "終わり",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "SscUpMj1pTj4",
    filename: filename,
    data: data,
  }),
});

}
                  },
                  "title": "End",
                  "tardy": true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

// Let's go!
study.run()