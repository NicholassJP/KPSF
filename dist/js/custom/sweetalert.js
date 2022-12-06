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
        text: "Apakah anda ingin menghapus settingan menu ini ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Hapus",
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
        text: "Apakah anda ingin menyimpan settingan menu ini ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Simpan",
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

$("#editSWAL").on("click", function (e) {
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
        text: "Apakah anda ingin mengedit settingan menu ini ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Edit",
        cancelButtonText: "Tidak",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          form.submit();
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Settingan berhasil diedit!",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Settingan tidak diedit!",
            "error"
          );
        }
      });
  });
