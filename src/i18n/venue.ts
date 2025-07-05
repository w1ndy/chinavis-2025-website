import { marked } from "marked";

export const zh = {
  PageTitle: "会址及住宿预定 - ChinaVis 2025",
  Title: "会址及住宿预定",
  Content: marked.parse(
    `
    ## 会议地点

    **酒店：** 杭州城北文澜大酒店

    **地址：** 杭州市拱墅区莫干山路566号

    **电话：** 0571-88003888

      <img src="{{ wenlaiBuildingImage }}" alt="杭州城北文澜大酒店" style="width: 100%; max-width: 600px; margin: 25px auto; display: block;" />

    ## 酒店预订

    **杭州城北文澜大酒店（会议酒店）订房流程：**

    扫描以下二维码 → 手机号验证码登录 → 选择入住和退房日期 → 酒店房型及房间数量 → 入住人姓名 + 手机号 → 支付首晚房费（定金） → 预订成功

    <img src="{{ wenlaiQrCodeImage }}" alt="二维码" style="width: 100%; max-width: 150px; margin: 25px auto; display: block;" />

    ## 酒店信息

    ### （一）杭州城北文澜大酒店（会议酒店）

    **地理位置：** 杭州拱墅区莫干山路566号

    **联系人：** 徐经理 18657181139

    **大床/双床房 协议价：** 450元/单早，500元/双早

    酒店位于杭州市拱墅区莫干山路，毗邻城北大悦城购物中心。距杭州东站12公里、杭州西站17公里、萧山国际机场39公里、杭州站12公里。

    <div class="wide_image">
      <img src="{{ wenlaiLobbyImage }}" alt="杭州城北文澜大酒店大堂"/>
    </div>

    <div class="wide_image">
      <img src="{{ wenlaiRoomImage }}" alt="杭州城北文澜大酒店房间"/>
    </div>

    ### （二）杭州西溪紫金港希尔顿欢朋酒店（配套酒店）

    **地理位置：** 杭州拱墅区莫干山路987号壹方汇A座南8楼酒店大堂（距会议酒店1公里 步行约15分钟）

    **酒店前台：** 0571-86098089

    **大床/双床房 协议价：** 430元/晚（含双早）

    **请自行电话预定：** 0571-86098089 （报会议名称订房）

    酒店地理位置优越，交通便捷，和睦地铁站内B1层电梯直达酒店大堂。距杭州东站15公里，杭州西站20公里、萧山国际机场41公里、杭州站13公里。

    <div class="wide_image">
      <img src="{{ hiltonLobbyImage }}" alt="杭州西溪紫金港希尔顿欢朋酒店大堂"/>
    </div>

    <div class="wide_image">
      <img src="{{ hiltonRoomImage }}" alt="杭州西溪紫金港希尔顿欢朋酒店房间"/>
    </div>

    ### （三）杭州紫金港美居酒店（配套酒店）

    **地理位置：** 杭州拱墅区申花路99号（距会议酒店2公里，步行约30分钟）

    **联系人：** 王经理 15757594555

    **大床/双床房 协议价：** 380元/晚（双早）

    **会议预定：** 请扫以下二维码预定酒店

    <img src="{{ mercureQrCodeImage }}" alt="杭州紫金港美居酒店二维码" style="width: 100%; max-width: 300px; margin: 25px auto; display: block;" />

    酒店位于申花板块，毗邻城北亚运公园、银泰购物中心、大悦城等商圈。距离和睦地铁站D口步行仅10分钟。距杭州东站13公里，杭州西站15公里、萧山国际机场39公里、杭州站13公里。

    <div class="wide_image">
      <img src="{{ mercureLobbyImage }}" alt="杭州紫金港美居酒店大堂" />
    </div>

    <div class="wide_image">
      <img src="{{ mercureRoomImage }}" alt="杭州紫金港美居酒店房间" />
    </div>

    ## 乘车路线

    ### 1、杭州东站——杭州城北文澜大酒店

    乘坐出租车（全程约32分钟），费用约26元

    公共交通：杭州东站乘坐19号线到文三路，换乘10号线到北大桥站A口，出站步行约400米至杭州城北文澜大酒店（全程约31分钟）

    ### 2、杭州西站——杭州城北文澜大酒店

    乘坐出租车（全程约26分钟），费用约30元

    公共交通：杭州西站乘坐19号线到文三路，换乘10号线到北大桥站A口，出站步行约400米至杭州城北文澜大酒店（全程约42分钟）

    ### 3、杭州站——杭州城北文澜大酒店

    乘坐出租车（全程约32分钟），费用约25元

    公共交通：杭州站乘坐5号线到建国北路，换乘2号线到学院路，换成10号线到北大桥A口，出站步行约400米至杭州城北文澜大酒店（全程约40分钟）

    ### 4、杭州萧山国际机场——杭州城北文澜大酒店

    乘坐出租车（全程约59分钟），费用约80元

    公共交通：萧山国际机场乘坐19号线到文三路，换乘10号线到北大桥A口，出站步行约400米至杭州城北文澜大酒店（全程约40分钟）
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Venue & Hotels - ChinaVis 2025",
  Title: "Conference Venue & Hotels",
  Content: marked.parse(
    `
    ## Conference Venue

    **Hotel:** Wenlan Hotel Northern Hangzhou

    **Address:** No. 566 Moganshan Road, Gongshu District, Hangzhou

    **Phone:** 0571-88003888

      <img src="{{ wenlaiBuildingImage }}" alt="Wenlan Hotel Northern Hangzhou" style="width: 100%; max-width: 600px; margin: 25px auto; display: block;" />

    ## Hotel Reservation

    **Booking Process for Wenlan Hotel Northern Hangzhou (Conference Hotel):**

    Scan the QR code below → Log in with phone number and verification code → Select check-in and check-out dates → Choose room type and number of rooms → Enter guest name + phone number → Pay the first night's room fee (deposit) → Booking successful

    <img src="{{ wenlaiQrCodeImage }}" alt="QR Code" style="width: 100%; max-width: 150px; margin: 25px auto; display: block;" />

    ## Hotel Information

    ### (1) Wenlan Hotel Northern Hangzhou (Conference Hotel)

    **Location:** No. 566 Moganshan Road, Gongshu District, Hangzhou

    **Contact Person:** Manager Xu 18657181139

    **King/Twin Room Conference Rate:** 450 RMB/night (with single breakfast), 500 RMB/night (with double breakfast)

    The hotel is located on Moganshan Road in Gongshu District, Hangzhou, adjacent to the Joy City shopping center. It is 12 km from Hangzhou East Railway Station, 17 km from Hangzhou West Railway Station, 39 km from Xiaoshan International Airport, and 12 km from Hangzhou Railway Station.

    <div class="wide_image">
      <img src="{{ wenlaiLobbyImage }}" alt="Wenlan Hotel Northern Hangzhou Lobby"/>
    </div>

    <div class="wide_image">
      <img src="{{ wenlaiRoomImage }}" alt="Wenlan Hotel Northern Hangzhou Room"/>
    </div>

    ### (2) Hampton by Hilton Hangzhou Xixi Zijingang (Partner Hotel)

    **Location:** Hotel Lobby, 8th Floor South, Block A, Yifanghui, No. 987 Moganshan Road, Gongshu District, Hangzhou (1 km from the conference hotel, about a 15-minute walk)

    **Hotel Front Desk:** 0571-86098089

    **King/Twin Room Conference Rate:** 430 RMB/night (including double breakfast)

    **Please book by phone:** 0571-86098089 (Mention the conference name when booking)

    The hotel enjoys a superior location with convenient transportation. An elevator on the B1 floor of Hemu Metro Station provides direct access to the hotel lobby. It is 15 km from Hangzhou East Railway Station, 20 km from Hangzhou West Railway Station, 41 km from Xiaoshan International Airport, and 13 km from Hangzhou Railway Station.

    <div class="wide_image">
      <img src="{{ hiltonLobbyImage }}" alt="Hampton by Hilton Hangzhou Xixi Zijingang Lobby"/>
    </div>

    <div class="wide_image">
      <img src="{{ hiltonRoomImage }}" alt="Hampton by Hilton Hangzhou Xixi Zijingang Room"/>
    </div>

    ### (3) Mercure Hangzhou Zijingang Hotel (Partner Hotel)

    **Location:** No. 99 Shenhua Road, Gongshu District, Hangzhou (2 km from the conference hotel, about a 30-minute walk)

    **Contact Person:** Manager Wang 15757594555

    **King/Twin Room Conference Rate:** 380 RMB/night (with double breakfast)

    **Conference Booking:** Please scan the QR code below to book the hotel.

    <img src="{{ mercureQrCodeImage }}" alt="Mercure Hangzhou Zijingang Hotel QR Code" style="width: 100%; max-width: 300px; margin: 25px auto; display: block;" />

    The hotel is located in the Shenhua area, adjacent to business districts such as the Asian Games Park, Intime Shopping Center, and Joy City. It is only a 10-minute walk from Exit D of Hemu Metro Station. It is 13 km from Hangzhou East Railway Station, 15 km from Hangzhou West Railway Station, 39 km from Xiaoshan International Airport, and 13 km from Hangzhou Railway Station.

    <div class="wide_image">
      <img src="{{ mercureLobbyImage }}" alt="Mercure Hangzhou Zijingang Hotel Lobby" />
    </div>

    <div class="wide_image">
      <img src="{{ mercureRoomImage }}" alt="Mercure Hangzhou Zijingang Hotel Room" />
    </div>

    ## Transportation Guide

    ### 1. Hangzhou East Railway Station to Wenlan Hotel Northern Hangzhou

    **By Taxi:** (Approx. 32 minutes), cost around 26 RMB.

    **By Public Transport:** From Hangzhou East Railway Station, take Line 19 to Wensan Road Station, transfer to Line 10 to Beidaqiao Station (Exit A). Walk about 400 meters to the hotel. (Total time: approx. 31 minutes).

    ### 2. Hangzhou West Railway Station to Wenlan Hotel Northern Hangzhou

    **By Taxi:** (Approx. 26 minutes), cost around 30 RMB.

    **By Public Transport:** From Hangzhou West Railway Station, take Line 19 to Wensan Road Station, transfer to Line 10 to Beidaqiao Station (Exit A). Walk about 400 meters to the hotel. (Total time: approx. 42 minutes).

    ### 3. Hangzhou Railway Station to Wenlan Hotel Northern Hangzhou

    **By Taxi:** (Approx. 32 minutes), cost around 25 RMB.

    **By Public Transport:** From Hangzhou Railway Station, take Line 5 to Jianguo North Road Station, transfer to Line 2 to Xueyuan Road Station, then transfer to Line 10 to Beidaqiao Station (Exit A). Walk about 400 meters to the hotel. (Total time: approx. 40 minutes).

    ### 4. Hangzhou Xiaoshan International Airport to Wenlan Hotel Northern Hangzhou

    **By Taxi:** (Approx. 59 minutes), cost around 80 RMB.

    **By Public Transport:** From Xiaoshan International Airport, take Line 19 to Wensan Road Station, transfer to Line 10 to Beidaqiao Station (Exit A). Walk about 400 meters to the hotel. (Total time: approx. 40 minutes).
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};
