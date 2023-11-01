import clsx from 'clsx';

// đây là thư viện generate className dựa trên điều kiện javascript á em, nếu điều kiện đúng hay value là một truthy thì className đó sẽ được generate, ngược lại sẽ không.

//Strings (variadic)
// đây ví dụ ta có foo (nó là một string hợp lệ), true && 'bar' (true là một giá trị truthy hợp lệ), tương tự với baz cũng vậy
// clsx('foo', true && 'bar', 'baz'); => 'foo bar baz'

// // Objects
// với object nó cũng hỗ trợ generate ra class từ các property của object,
// foo trong có giá trị là true, nên nó hợp lệ, ta sẽ có className là foo,
// bar vì bar là false nên ta sẽ KHÔNG có className bar tạo ra
// cuối cùng là baz, baz là một hàm logic return về true nên nó vẫn hợp lệ
// clsx({ foo:true, bar:false, baz:isTrue() }); => 'foo baz'
// em hiểu hình dung ra chưa, rồi ạ cho em hỏi cái istrue là gì ạ, là một hàm ví dụ cho trường hợp á em, nó return về true nhu tên hàm đã thể hiện rõ dạ vâng ạ

// // Objects (variadic)
// clsx({ foo:true }, { bar:false }, null, { '--foobar':'hello' });
// //=> 'foo --foobar'

// NHỮNG GIÁ TRỊ SAU ĐÂY LÀ NHỮNG GIÁ TRỊ SẼ BỊ LOẠI BỎ NẾU VALUE CỦA ĐỐI SỐ TRUYỀN VÀO THƯ VIỆN:
// LƯU Ý LÀ `TRUE` ĐỐI SỐ ĐẦU TIÊN NÓ SẼ BỊ LƯỢT BỎ NẾU NÓ CHỈ CÓ MỘT MÌNH NÓ THÔI NHA EM, NẾU NÓ LÀ MỘT VALUE CỦA PROPERTY VD NHƯ { bar: true } thì className vẫn có class là `bar`
//clsx(true, false, '', null, undefined, 0, NaN);
// em hiểu chưa, anh vd cho em trg hop bi loai bo voi

export const cn = clsx;
