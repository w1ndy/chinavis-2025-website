import { marked } from "marked";

export const zh = {
  PageTitle: "注册 - ChinaVis 2025",
  Title:
    '<span style="font-size: 0.8em">第十二届中国可视化与可视分析大会（ChinaVis 2025）</span><br />会议注册',
  Content: marked.parse(
    `
    参会者请先在线注册个人信息，根据注册类型获知注册费用。 参会者可以通过银行汇款，支付宝或者微信转账的方式缴费，不接受邮局汇款。 请在转账附言里填写“可视化+注册编号”，便于到账金额查询。学生注册的参会者请在会议报道时提供学生证或者其他证明学生身份的证件。

    会议注册通道：[ChinaVis 2025 会议注册](https://meeting.csig.org.cn/exh/default2/baoming?fair_id=339&role_id=22&q=1)

    会议通知下载： 待公布

    会址及酒店信息： 待公布

    ## 个人信息注册

    请在线注册个人信息，所注册的个人信息将用于铭牌打印。注册成功后系统会向注册邮箱发送注册编号。请妥善保管注册编号，此编号将在会议签到以及支付注册费中使用。请所有与会人员**务必**在线注册个人信息。

    ## 注册费类型

    请根据自身情况选择合适的注册类型。会议论文需要至少一名作者为非学生注册。会员指“中国图象图形学学会”会员。点击[这里](http://membership.csig.org.cn/ass/apply/step?fair_id=223)加入中国图象图形学学会。**对于非会员人员，建议先申请加入学会，获得会员号后享受优惠价格注册会议。申请入会时请选择可视化与可视分析专委会，并选择专委会委员推荐。**

    志愿者必须为 CSIG 学生会员，志愿者需先登记审批（ http://chinavis.org/2025/zh/volunteer ），获得志愿者资格后再进行注册。

    <div class="registration">
      <table>
        <thead>
          <tr>
            <td rowspan="2" colspan="2">注册类型</td>
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
            <td rowspan="2">学生注册</td>
            <td>会议注册</td>
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
            <td>暑期学校 + 会议注册</td>
            <td>1500元</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
          <tr>
            <td rowspan="2">普通注册</td>
            <td>会议注册</td>
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
            <td>暑期学校 + 会议注册</td>
            <td>4200元</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
          <tr>
            <td>志愿者注册</td>
            <td></td>
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

    ## 退费政策

    会议举行前 30 日以前申请退费，可免手续费；会议举行前 15-30 日（含）申请退费，扣除 30% 手续费；会议举行前 7-15 日（含）申请退费，扣除 50% 手续费；会议举行前 7 日（含）内申请退费或未参加会议不予退款。

    退费申请审核通过后，开具的电子发票将作废，请勿使用。退费将在会后开始办理，手续费开会务费发票。

    ## 注意事项

    1. 每篇文章至少有一人为非学生注册。
    2. 转账时，请务必注明“可视化+注册编号”。
    3. 会议注册费电子发票统一发送到注册人邮箱，如需纸质发票可在会议现场领取。
    4. 有关于注册的任何问题请发邮件至 chinavis2025_reg@163.com 咨询。
    `.replace(/  +/g, "")
  ),
};

export const en = {
  PageTitle: "Registration - ChinaVis 2025",
  Title:
    '<span style="font-size: 0.8em">The 12th China Conference on Visualization and Visual Analytics (ChinaVis 2025)</span><br />Conference Registration',
  ToBeAnnounced: "To be announced",
};
