import api from "../../../API/api";

export default function ExportButton({ labId }) {

    const handleExport = async () => {
        try {
            const response = await api.get(
                `/admin/learning-labs/${labId}/export`,
                { responseType: "blob" }
            );

            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );

            const link = document.createElement("a");
            link.href = url;
            link.download = `learning_lab_${labId}_registrations.xlsx`;

            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (error) {
            console.error(error);
            alert("Export failed");
        }
    };

    return (
        <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded"
        >
            Export Excel
        </button>
    );
}
