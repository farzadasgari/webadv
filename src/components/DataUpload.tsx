import { useState, useCallback, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
    Upload,
    File,
    CheckCircle,
    AlertCircle,
    X,
    Eye,
    Settings,
} from 'lucide-react';
import { toast } from 'sonner';
import * as React from 'react';

interface UploadedFile {
    id: string;
    name: string;
    size: number;
    status: 'uploading' | 'success' | 'error';
    progress: number;
    type: string;
}

export const DataUpload = () => {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    }, []);

    const simulateFileUpload = useCallback(
        (file: UploadedFile) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 30;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    setFiles((prev) =>
                        prev.map((f) =>
                            f.id === file.id
                                ? { ...f, status: 'success', progress: 100 }
                                : f
                        )
                    );
                    toast.success(`${file.name} uploaded successfully`);
                } else {
                    setFiles((prev) =>
                        prev.map((f) =>
                            f.id === file.id ? { ...f, progress } : f
                        )
                    );
                }
            }, 200);
        },
        [setFiles]
    );

    const processFiles = useCallback(
        (fileList: File[]) => {
            const newFiles: UploadedFile[] = fileList.map((file) => ({
                id: Math.random().toString(36).substr(2, 9),
                name: file.name,
                size: file.size,
                status: 'uploading',
                progress: 0,
                type: file.type || 'unknown',
            }));

            setFiles((prev) => [...prev, ...newFiles]);

            newFiles.forEach((file) => {
                simulateFileUpload(file);
            });
        },
        [simulateFileUpload, setFiles] // Add dependencies
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragOver(false);
            const droppedFiles = Array.from(e.dataTransfer.files);
            processFiles(droppedFiles);
        },
        [processFiles] // Keep processFiles in dependency array
    );

    const handleFileSelect = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFiles = Array.from(e.target.files || []);
            processFiles(selectedFiles);
        },
        [processFiles] // Keep processFiles in dependency array
    );

    const removeFile = (id: string) => {
        setFiles((prev) => prev.filter((f) => f.id !== id));
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const triggerFileSelect = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <section className="px-4 py-12">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-8 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-slate-800">
                        Upload ADV Data
                    </h1>
                    <p className="text-lg text-slate-600">
                        Upload your acoustic Doppler velocimeter datasets to
                        begin analysis. Supported formats include CSV, EXCEL,
                        and DATA formats.
                    </p>
                </div>

                <Card className="mb-8 p-8">
                    <div
                        className={`rounded-lg border-2 border-dashed p-12 text-center transition-all duration-300 ${
                            isDragOver
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-slate-300 hover:border-slate-400'
                        }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <Upload className="mx-auto mb-4 h-12 w-12 text-slate-400" />
                        <h3 className="mb-2 text-xl font-semibold text-slate-800">
                            Drop your ADV files here
                        </h3>
                        <p className="mb-6 text-slate-600">
                            or click to browse and select files from your
                            computer
                        </p>

                        <input
                            type="file"
                            multiple
                            accept=".csv,.xlsx,.xls,.dat"
                            onChange={handleFileSelect}
                            className="hidden"
                            id="file-upload"
                            ref={fileInputRef}
                        />
                        <Button
                            onClick={triggerFileSelect}
                            className="cursor-pointer"
                        >
                            <Upload className="mr-2 h-4 w-4" />
                            Select Files
                        </Button>

                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                            {['CSV', 'XLSX', 'XLS', 'DAT'].map((format) => (
                                <Badge key={format} variant="outline">
                                    .{format.toLowerCase()}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Card>

                {files.length > 0 && (
                    <Card className="p-6">
                        <h3 className="mb-4 flex items-center text-lg font-semibold text-slate-800">
                            <File className="mr-2 h-5 w-5" />
                            Uploaded Files ({files.length})
                        </h3>

                        <div className="space-y-4">
                            {files.map((file) => (
                                <div
                                    key={file.id}
                                    className="rounded-lg border border-slate-200 p-4"
                                >
                                    <div className="mb-2 flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-100">
                                                <File className="h-4 w-4 text-slate-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-800">
                                                    {file.name}
                                                </p>
                                                <p className="text-sm text-slate-600">
                                                    {formatFileSize(file.size)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            {file.status === 'success' && (
                                                <CheckCircle className="h-5 w-5 text-green-600" />
                                            )}
                                            {file.status === 'error' && (
                                                <AlertCircle className="h-5 w-5 text-red-600" />
                                            )}
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    removeFile(file.id)
                                                }
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    {file.status === 'uploading' && (
                                        <div className="space-y-2">
                                            <Progress
                                                value={file.progress}
                                                className="h-2"
                                            />
                                            <p className="text-sm text-slate-600">
                                                {Math.round(file.progress)}%
                                                uploaded
                                            </p>
                                        </div>
                                    )}

                                    {file.status === 'success' && (
                                        <div className="mt-3 flex space-x-2">
                                            <Button variant="outline" size="sm">
                                                <Eye className="mr-2 h-4 w-4" />
                                                Preview Data
                                            </Button>

                                            <Button variant="outline" size="sm">
                                                <Settings className="mr-2 h-4 w-4" />
                                                Configure Analysis
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                )}
            </div>
        </section>
    );
};
