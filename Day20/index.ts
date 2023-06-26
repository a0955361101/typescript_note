// 陽春的交通票務系統
// 使用列舉定義我們的車票種類
enum TransportTicketType {
  Train, // 坐火車
  MRT, // 捷運
  Aviation, // 航空
}

// 使用元組 : 依順序分別代表小時、分鐘與秒鐘
type TimeFormat = [number, number, number];

// 定義名為交通的類別
class TicketSystem {
  constructor(
    private type: TransportTicketType,
    private startingPoint: string,
    private destination: string,
    private departureTime: Date
  ) {}

  // 計算交通的間隔時間
  private deriveDuration(): TimeFormat {
    // 因為交通方式有三種,所以我們選擇先寫死
    return [1, 0, 0];
  }

  // 計算交通的抵達時間
  private deriveArrivalTime(): Date {
    const { departureTime } = this;
    // 從間隔時間導出總共間隔微秒數
    const [hours, minutes, seconds] = this.deriveDuration();
    const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds;
    const durationMilliseconds = durationSeconds * 1000;

    // 導出抵達時間
    const arrivalMilliseconds = departureTime.getTime() + durationMilliseconds;
    return new Date(arrivalMilliseconds);
  }

  // 印出交通票券的詳細內容
  public getTicketInfo() {
    // 根據 Day07 提到的列舉的反射性
    // 可以反向由值推回列舉的鍵名稱
    const ticketName = TransportTicketType[this.type];
    const arrivalTime = this.deriveArrivalTime;

    console.log(`
      Ticket Type: ${ticketName}
      Station:     ${this.startingPoint} - ${this.destination}
      Departure:   ${this.departureTime}
      Arrival:     ${arrivalTime}
    `);
  }
}

// 開一張火車票
const randomTicket = new TicketSystem(
  // 這是火車票
  TransportTicketType.Train,

  // 啟程地點
  "Tainan",

  // 抵達終點
  "Kaohsiung",

  // 啟程時間 2019/09/01 早上 9 點 00 分 00 秒
  new Date(2019, 8, 1, 9, 0, 0)
);

randomTicket.getTicketInfo();
