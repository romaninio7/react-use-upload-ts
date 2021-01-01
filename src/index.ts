import { useUpload } from "./use-upload";
import { UploadProvider, UploadContext } from "./provider";
import { createXhrClient } from "./clients/xhr";
import { createGraphQLClient } from "./clients/graphql";

export {
  useUpload,
  UploadContext,
  UploadProvider,
  createXhrClient,
  createGraphQLClient,
};

export type FileOrFileList = FileList | File | undefined;
