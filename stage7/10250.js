let input = [
  '2',
  '2 2 4',
  '30 50 72'];

let arr = input.splice(1, input.length);

for (value of arr) {
  let [H, W, N] = value.split(' ').map(value => Number(value));
  let roomNumber, roomFloor;
  roomNumber = Math.ceil(N / H);
  roomNumber = roomNumber < 10 ? '0' + String(roomNumber) : String(roomNumber);
  roomFloor = N % H === 0 ? H : String(N % H);
  console.log(roomFloor + roomNumber);
}