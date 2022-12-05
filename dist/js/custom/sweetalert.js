$("#deleteSWAL").on("click", function (e) {
    e.preventDefault();
    var form = $(this).parents("form");
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger mr-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Apakah anda ingin menghapus settingan menu ini ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Terima",
        cancelButtonText: "Tidak",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          form.submit();
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Settingan berhasil dihapus!",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Settingan tidak dihapus!",
            "error"
          );
        }
      });
  });

$("#simpanSWAL").on("click", function (e) {
    e.preventDefault();
    var form = $(this).parents("form");
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger mr-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Apakah anda ingin menyimpan settingan menu ini ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Terima",
        cancelButtonText: "Tidak",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          form.submit();
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Settingan berhasil disimpan!",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Settingan tidak disimpan!",
            "error"
          );
        }
      });
  });
