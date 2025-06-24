import { marked } from "marked";

export const zh = {
  PageTitle: "注册 - ChinaVis 2025",
  Title: "会议注册",
  Content: marked.parse(
    `
    ## 注册二维码及链接

    <img src="{{ qrcodeImage }}" alt="注册二维码" style="width: 200px; height: 200px; display: block; margin: 0 auto;" />
    <p style="text-align: center; text-indent: 0; margin-top: 0">扫描二维码注册</p>

    **会议注册通道：** [ChinaVis 2025 会议注册](https://meeting.csig.org.cn/exh/default2/baoming?fair_id=339&role_id=22&q=1)

    **会议通知下载：** 待公布

    ## 注册费类型

    请根据自身情况选择合适的注册类型。会议论文需要至少一名作者为非学生注册。会员指“中国图象图形学学会”会员。点击[这里](http://membership.csig.org.cn/ass/apply/step?fair_id=223)加入中国图象图形学学会。**对于非会员人员，建议先申请加入学会，获得会员号后享受优惠价格注册会议。申请入会时请选择可视化与可视分析专委会，并选择专委会委员推荐。**

    志愿者必须为 CSIG 学生会员，志愿者需先登记审批（ http://chinavis.org/2025/zh/volunteer ），获得志愿者资格后再进行注册。

    <div class="registration">
      <table>
        <thead>
          <tr>
            <td rowspan="2">注册类型</td>
            <td colspan="2">提前注册<br />（截至 6 月 30 日 23:59）</td>
            <td colspan="2">正常注册<br />（7 月 1 日 - 7 月 19 日）</td>
            <td colspan="2">现场注册<br />（7 月 20 日 - 7 月 22 日）</td>
            <td colspan="2">单日注册<br />（参加其中一天）</td>
          </tr>
          <tr>
            <td>会员</td>
            <td>非会员</td>
            <td>会员</td>
            <td>非会员</td>
            <td>会员</td>
            <td>非会员</td>
            <td>会员</td>
            <td>非会员</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>学生注册</td>
            <td>1400元</td>
            <td>1800元</td>
            <td>1800元</td>
            <td>2300元</td>
            <td>2000元</td>
            <td>2500元</td>
            <td>1100元</td>
            <td>1400元</td>
          </tr>
          <tr>
            <td>普通注册</td>
            <td>2200元</td>
            <td>2800元</td>
            <td>2800元</td>
            <td>3500元</td>
            <td>3000元</td>
            <td>3800元</td>
            <td>1200元</td>
            <td>1500元</td>
          </tr>
          <tr>
            <td>志愿者注册</td>
            <td>700元</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>

    十人以上团体提前注册有优惠，团体注册每人减免 100 元，请联系 chinavis2025_reg@163.com 报名注册。

    ## 退费政策

    会议举行前 30 日以前申请退费，可免手续费；会议举行前 15-30 日（含）申请退费，扣除 30% 手续费；会议举行前 7-15 日（含）申请退费，扣除 50% 手续费；会议举行前 7 日（含）内申请退费或未参加会议不予退款。

    退费申请审核通过后，开具的电子发票将作废，请勿使用。退费将在会后开始办理，手续费开会务费发票。

    ## 注意事项

    1. 每篇文章至少有一人为非学生注册。
    2. 会议注册费电子发票统一发送到注册人邮箱，如需纸质发票可在会议现场领取。
    3. 有关于注册的任何问题请发邮件至 chinavis2025_reg@163.com 咨询。
    `.replace(/  +/g, "")
  ),
};

export const en = {
  PageTitle: "Registration - ChinaVis 2025",
  Title: "Conference Registration",
  Content: marked.parse(
    `
    ## Registration QR Code and Link

    <img src="{{ qrcodeImage }}" alt="Registration QR Code" style="width: 200px; height: 200px; display: block; margin: 0 auto;" />
    <p style="text-align: center; text-indent: 0; margin-top: 0">Scan QR Code to Register</p>

    **Conference Registration Portal:** [ChinaVis 2025 Conference Registration](https://meeting.csig.org.cn/exh/default2/baoming?fair_id=339&role_id=22&q=1)

    **Conference Notice Download:** To be announced

    ## Registration Fee Types

    Please choose the appropriate registration type based on your situation. Conference papers require at least one author to register as a non-student. "Member" refers to members of the China Society of Image and Graphics (CSIG). Click [here](http://membership.csig.org.cn/ass/apply/step?fair_id=223) to join CSIG. **For non-members, we recommend applying for membership first to enjoy discounted registration fees after obtaining a membership number. When applying for membership, please select the Visualization and Visual Analytics Technical Committee and choose committee member recommendation.**

    Volunteers must be CSIG student members. Volunteers need to register for approval first (http://chinavis.org/2025/en/volunteer), obtain volunteer qualification, and then proceed with registration.

    <div class="registration">
      <table>
        <thead>
          <tr>
            <td rowspan="2">Registration Type</td>
            <td colspan="2">Early Registration<br />(Until June 30, 23:59)</td>
            <td colspan="2">Regular Registration<br />(July 1 - July 19)</td>
            <td colspan="2">On-site Registration<br />(July 20 - July 22)</td>
            <td colspan="2">Single-day Registration<br />(Attend one day only)</td>
          </tr>
          <tr>
            <td>Member</td>
            <td>Non-member</td>
            <td>Member</td>
            <td>Non-member</td>
            <td>Member</td>
            <td>Non-member</td>
            <td>Member</td>
            <td>Non-member</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student Registration</td>
            <td>¥1400</td>
            <td>¥1800</td>
            <td>¥1800</td>
            <td>¥2300</td>
            <td>¥2000</td>
            <td>¥2500</td>
            <td>¥1100</td>
            <td>¥1400</td>
          </tr>
          <tr>
            <td>Regular Registration</td>
            <td>¥2200</td>
            <td>¥2800</td>
            <td>¥2800</td>
            <td>¥3500</td>
            <td>¥3000</td>
            <td>¥3800</td>
            <td>¥1200</td>
            <td>¥1500</td>
          </tr>
          <tr>
            <td>Volunteer Registration</td>
            <td>¥700</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>

    Group registrations of 10 or more people receive early registration discounts with 100 RMB reduction per person. Please contact chinavis2025_reg@163.com for group registration.

    ## Refund Policy

    Refund applications submitted 30 days or more before the conference are free of handling fees; applications submitted 15-30 days (inclusive) before the conference will be charged a 30% handling fee; applications submitted 7-15 days (inclusive) before the conference will be charged a 50% handling fee; applications submitted within 7 days (inclusive) before the conference or non-attendance will not be refunded.

    After refund applications are approved, the issued electronic invoice will be voided and should not be used. Refunds will be processed after the conference, and handling fees will be invoiced as conference service fees.

    ## Important Notes

    1. Each paper must have at least one non-student registration.
    2. Electronic invoices for conference registration fees will be sent to the registrant's email address. Paper invoices can be collected at the conference venue if needed.
    3. For any questions regarding registration, please email chinavis2025_reg@163.com.
    `.replace(/  +/g, "")
  ),
};
